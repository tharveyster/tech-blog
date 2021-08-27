const deleteFormHandler = async (event) => {
  event.preventDefault();

  // Get the post id from the url
  const post_id = location.pathname.split('/')[2];

  // Send a DELETE request to the API end point
  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE',
    body: JSON.stringify({ post_id: post_id }),
    headers: { 'Content-Type': 'application/json' }
  });

  // If successful return the browser to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#deletePostBtn').addEventListener('click', deleteFormHandler);