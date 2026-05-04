"use server";

const TELEGRAM_API_URL = "https://api.telegram.org/bot";

function formatTelegramMessage(formData) {
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const company = formData.get("company") || "";
  const phone = formData.get("phone") || "";
  const message = formData.get("message") || "";
  const budget = formData.get("budget") || "";

  const budgetLabels = {
    "25": "$300 – $1k",
    "50": "$1k – $5k",
    "100": "$5k – $10k",
    "150": "More than $10k",
  };

  const budgetText = budgetLabels[budget] || budget;

  return `📬 *New Contact Form Submission*

*Name:* ${escapeMarkdown(name)}
*Email:* ${escapeMarkdown(email)}
*Company:* ${escapeMarkdown(company)}
*Phone:* ${escapeMarkdown(phone)}
*Budget:* ${escapeMarkdown(budgetText)}

*Message:*
${escapeMarkdown(message)}`;
}

function escapeMarkdown(text) {
  if (!text) return "N/A";
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}

export async function submitContactForm(prevState, formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) {
      return {
        success: false,
        error: "Name and email are required",
      };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return {
        success: false,
        error: "Telegram configuration is missing",
      };
    }

    const message = formatTelegramMessage(formData);

    const response = await fetch(`${TELEGRAM_API_URL}${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "MarkdownV2",
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      return {
        success: false,
        error: `Telegram API error: ${result.description || "Unknown error"}`,
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Failed to send message",
    };
  }
}
