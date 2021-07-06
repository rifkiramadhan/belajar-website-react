const e = React.createElement;

// Display a "Like" <button>
function LikeButton() {
    return e(
      'button',
      { onClick: () => alert('button work') },
      'Like'
    );
}

// Membuat DOM like_button
const domContainer = document.querySelector('#like_button_container');

// Membuat render real DOM component like_button
ReactDOM.render(e(LikeButton), domContainer);