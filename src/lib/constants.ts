export const WHATSAPP_URL = "https://wa.me/+5521976044130";

/**
 * Gera URL do WhatsApp com mensagem contextual pré-formatada para otimização de conversão (CRO).
 */
export function getWhatsAppUrl(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `https://wa.me/5521976044130?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_LINKS = {
  github: "https://github.com/ZweiSpy",
  // linkedin: "https://linkedin.com/in/seu-perfil", // Desativado a pedido do PO até criação de novo perfil
  workana:
    "https://www.workana.com/freelancer/f60aa1ec5d243799cce32b2d05406711",
  instagram: "https://www.instagram.com/vinicius.archtech/",
} as const;
