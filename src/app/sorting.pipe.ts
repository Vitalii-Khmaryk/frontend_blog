import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  transform(posts: any[], category: string = ''): any {
    if (!category) {
      return posts;
    }

    const filteredPosts = posts.filter(post => {
      return post.category.toLowerCase() === category.toLowerCase();
    });

    if (filteredPosts.length === 0) {
      return [{ category: 'There are no posts in this category yet...' }];
    }

    return filteredPosts;
  }
}
