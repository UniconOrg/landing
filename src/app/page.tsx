// app/page.tsx
import { redirect } from 'next/navigation';

/**
 * Componente de página raíz (/).
 * Por defecto, en el directorio 'app', este es un Server Component.
 */
export default function HomePage() {
  // Define la ruta de destino
  const destinationPath = '/first-meetup';
  
  // Llama a la función 'redirect' de next/navigation.
  // Next.js maneja esta como una redirección de tipo 307 (temporal) 
  // o 308 (permanente, si se usa 'permanent: true' como segunda opción, 
  // aunque la función simple por defecto suele ser 307).
  // Para garantizar un 308 (permanente), la documentación de Next.js
  // sugiere que el Router del lado del cliente lo maneja.

  // Usar la función 'redirect' es el método canónico en el directorio 'app'.
  redirect(destinationPath);

  // Este código no se ejecutará
  return null; 
}

// Opcional: Si quieres ser *muy* explícito sobre el comportamiento del caché y SSR.
// export const dynamic = 'force-dynamic';