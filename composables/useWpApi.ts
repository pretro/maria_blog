export default () => {
    const config = useRuntimeConfig();
    const wpUri = config.public.wpUri;

    //get
    const get = async (endpoint: string) => useFetch(`${wpUri}/wp-json/wp/v2/${endpoint}`);

    //Get All Posts
    const getPosts = async (
        categories: number,
        page: number = 1,
        perPage: number = 9
    ) => {
        let query = `posts?_embed&per_page=${perPage}&page=${page}`;
        if (categories) {
            query += `&categories=${categories}`;
        }
        return get(query);
    };

    //Get a Single Post
    const getPost = async (slug: string) => get(`posts?slug=${slug}&_embed`);

    //Get all Categories
    const getCategories = async () => get("categories");

    //Get a Single Category
    const getCategory = async (slug: string) => get(`categories?slug=${slug}`);

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory,
    };
};