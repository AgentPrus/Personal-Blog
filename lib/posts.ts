import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '@/utils/index';

const files = fs.readdirSync(path.join('posts'));

export function getPosts() {
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');

        const markDownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8');

        const { data: frontmatter } = matter(markDownWithMeta);

        return {
            frontmatter,
            slug,
        };
    });

    return posts.sort(sortByDate);
}
