const myPost = {};

myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;

console.log(myPost);

myPost.postLikes++;

delete myPost.shared;

console.log(myPost);
