const updateFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the update/delete form
  const title = document.querySelector('#viewPostTitle').value.trim();
  const content = document.querySelector('#viewPostText').value.trim();

  // Collect post id from url
  const post_id = location.pathname.split('/')[2];

  // Get post by id and update the content
  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  // If successful redirect the browser to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#updatePostBtn').addEventListener('click', updateFormHandler);