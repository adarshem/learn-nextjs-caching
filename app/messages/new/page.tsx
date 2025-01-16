import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';
import { addMessage } from '@/lib/messages';

export default function NewMessagePage() {
  async function createMessage(formData: FormData) {
    'use server';

    const message = formData.get('message') as string;
    addMessage(message);
    // Revalidate the cache associated with the messages route
    // revalidatePath('/messages');
    // Revalidate the cache associated with the messages route and all sub routes
    // revalidatePath('/messages', 'layout')
    // Revalidate the cache associated with the tag 'msg'
    revalidateTag('msg');
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows={5} />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
