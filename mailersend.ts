export const SendMail = async (subject: string, html: string) => {
  const options = {
      method: 'POST', body: JSON.stringify({ subject, html })
  };
  const response = await fetch(`${import.meta.env.APP_URL}/api/mail`,options);
  const result = await response.json();
  return result;
}