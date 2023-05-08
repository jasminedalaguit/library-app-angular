export interface BooksInterface {
    id: number;
    book_title: string;
    author: string;
    category_id: number;
    category: {
        id: number;
        category_name: string;
        created_at: Date;
        updated_at: Date; 
    }
    file_id: number;
    file_url: string;
    created_at: Date;
    updated_at: Date; 
}
