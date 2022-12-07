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
                <p data-aos="flip-right" id="about-mark">Mark Manson is an American writer and blogger.
                    He graduated from Boston University in 2007 and started a blog.
                    His posts were about dating-advice and in 2010 he transitioned to 
                    self-help writing. Developing life advice with humor and such unique word choice, he start gaining 
                    a following as a million people started reading his blogs every month.
                    Manson basically went from being a broke college student to making crappy blogs 
                    to then becoming a self-help influencer. His best selling book, <i>The Subtle Art of Not Giving a F*ck</i> sold more than 10 million copies globally.
                </p>
                </div>
                <p data-aos="flip-left" id="quote"><i>"Life advice is most effective when it’s fun and unpretentious" - Mark Manson</i></p>
            </article>
        </div>
    )
}
export default Author;