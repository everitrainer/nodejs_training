import memcached from 'memcached';

export const client = new memcached('localhost:11211');

// Cached database fetch function
export async function getCachedGame(id) {
    try {
        const cachedGame = await new Promise((resolve, reject) =>
            client.get(id, (error, data) => {
                if (error) reject(error);
                resolve(data);
            })
        );
        return cachedGame;
    } catch (error) {
        console.error('Error fetching cached post:', error);
        return null;
    }
}
