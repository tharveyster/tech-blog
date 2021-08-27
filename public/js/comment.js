const commentFormHandler = async (event) => {
  event.preventDefault();

  // Get the content of the comment form
  const content = document.querySelector('#commentText').value.trim();

  // Get the post id from the url
  const post_id = location.pathname.split('/')[2];

  // If the form was not empty post the comment
  if (commentText) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    // If successful refresh the page
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);