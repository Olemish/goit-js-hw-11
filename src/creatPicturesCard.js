export { createPicturesCards };
    
function createPicturesCards(picture) {
    console.log(picture)
    return picture.reduce((total, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        total + `<div class="photo-card">
                <a href="${webformatURL}" class="thumb">
                    <img src="${largeImageURL}" alt="${tags}" loading="lazy" width="180"/>
                    <div class="info">
                        <p class="info-item">
                        <b>Likes: ${likes}</b>
                        </p>
                        <p class="info-item">
                        <b>Views: ${views}</b>
                        </p>
                        <p class="info-item">
                        <b>Comments: ${comments}</b>
                        </p>
                        <p class="info-item">
                        <b>Downloads: ${downloads}</b>
                        </p>
                    </div>
                </a>
            </div>`, "")
}


