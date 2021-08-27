const deleteFormHandler = async (event) => {
  event.preventDefault();

  const post_id = location.pathname.split('/')[2];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
    body: JSON.stringify({ post_id: post_id }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#deletePostBtn').addEventListener('click', deleteFormHandler);