export default async function MessagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The MessagesPage(page.tsx) component is also calling the same request but with different options ( headers) and hence 2 calls will be fired
  // If the request and its configs are same, you will see only one call
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'x-id': 'layout file',
    },
  });

  const messages = await response.json();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
