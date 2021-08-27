const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#viewPostTitle').value.trim();
  const content = document.querySelector('#viewPostText').value.trim();
  const post_id = location.pathname.split('/')[2];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#updatePostBtn').addEventListener('click', updateFormHandler);