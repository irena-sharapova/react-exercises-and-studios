export default function BookList() {
   let pageTitle = "My Books List";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1713542603i/11297.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61XTdNzs1KL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://d1cm35kbp068hs.cloudfront.net/4fkdc9vc4v/thumbnail.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Norwegian Wood" />
         <img src={book2} alt="Metro 2033" />
         <img src={book3} alt="Fight club" />
      </div>      
   );
}