const Author = () => {
    return (
        <div>
            <div className="flex">
                <div id="author" ></div>
            <h2 data-aos="flip-right" id="author-header">Who is Mark Manson?</h2>
            </div>
            <div id="author" ></div>
            <img data-aos="flip-left" id='mark1' src="src/assets/manson1.png" alt="Mark Manson" />
            <article>
                <div className="flex">
                <p data-aos="flip-right" id="about-mark">Mark Manson is an American writer and blogger. Bloggling life advice was all he really did but
                    in a few years, he started writing books as well.
                    His best selling book, <i>The Subtle Art of Not Giving a F*ck</i> sold more than 10 million copies globally.
                </p>
                </div>
                <p data-aos="flip-left" id="quote"><i>"Life advice is most effective when it’s fun and unpretentious" - Mark Manson</i></p>
            </article>
        </div>
    )
}
export default Author;
