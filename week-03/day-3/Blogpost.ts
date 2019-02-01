'use strict';

class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(iAN: string, iTitle: string, iText: string, iPub: string) {
        this.authorName = iAN;
        this.title = iTitle;
        this.text = iText;
        this.publicationDate = this.publicationDate;
    }
}

let blogPost1 = new BlogPost('John Doe', 'Lorem ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.'),
    blogPost2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.'),
    blogPost3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');