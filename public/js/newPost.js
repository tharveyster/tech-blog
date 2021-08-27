const newPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new post form
  const title = document.querySelector('#newPostTitle').value.trim();
  const content = document.querySelector('#newPostText').value.trim();

  // Create a new post if both fields contain content
  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json'},
    });

    // If successful return the browser to the dashboard
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#newPost').addEventListener('submit', newPostFormHandler);