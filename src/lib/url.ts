/** Ruta interna con la base del sitio. */
export function href(path: string, base: string = import.meta.env.BASE_URL): string {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function whatsappUrl(phone: string, message: string): string {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
