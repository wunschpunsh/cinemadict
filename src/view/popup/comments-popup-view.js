export const createCommentsTemplate = (data) => {
  const commentsMarkup = data.map(
    (item) => ` <li class="film-details__comment">
     <span class="film-details__comment-emoji">
       <img src="./images/emoji/${item.emotion}.png" width="55" height="55" alt="emoji-smile">
     </span>
     <div>
       <p class="film-details__comment-text">${item.comment}</p>
       <p class="film-details__comment-info">
         <span class="film-details__comment-author">${item.author}</span>
         <span class="film-details__comment-day">${item.date}</span>
         <button class="film-details__comment-delete">Delete</button>
       </p>
     </div>
   </li>`
  );

  return commentsMarkup.join(' ');
};
