/*
A Tweeter module that has the logic of tweeting.
the module:
- Storing all of the twits in an array
- Posting a twit 
- Commenting on twits
- Removing twits
- Removing comments
*/
const Tweeter = function(){ //The tweeter module function

    const _posts = [ 
        /*An array that contains all of the posts. each post is an object that looks like this: {text, id, comments}
        The text is a string wich contains the post itself.
        The id is also a string like 'p1'. each post that's added gets a new p id with the next number.
        The comment stored in an array. each comment is an object with an id like 'c5' and the text itself.
        */
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 3 //A variable that counts how many posts has been uploaded 
    let commentIdCounter = 7 //A variable that counts how many comments has been uploaded 

    const getPosts = () => _posts //A function that returns the posts array

    const addPost = function(text) { //A function that receives some text and adds a post object to posts
        const id = `p${postIdCounter}` 
        const comments = [] 
        _posts.unshift({text, id, comments})
        postIdCounter++ //the counter increases by 1
    }

    const removePost = function(postID){ //function that receives a postID and removes the relevant post from posts array
        postIndex = _posts.findIndex(p => p.id === postID)
        if(postIndex >= 0){//if id does not exist postIndex will be -1
            _posts.splice(postIndex, 1)
        }
    }

    const addComment = function(text, postID){
        //function that receives a postID and text and pushes a new comment in the comments array of the exact post
        const index = _posts.findIndex(p => p.id === postID)
        if(index >= 0){ //if the id doesn't exist index will be -1
            const id = `c${commentIdCounter}`
            _posts[index].comments.push({id, text})
            commentIdCounter++
        }
   
    }

    const removeComment = function(postID, commentID){
        //functiuon that gets a postId and commentID and removes the wanted comment from the wanted post
        const postIndex = _posts.findIndex(p => p.id === postID)
        if(postIndex >= 0){//id the id doesn't exist postIndex will be -1
            const commentIndex = _posts[postIndex].comments.findIndex(c => c.id === commentID)
            if(commentIndex >= 0){//if the id doesn't exist commentIndex will be -1
                _posts[postIndex].comments.splice(commentIndex, 1)
            }
        }
    }

    return {getPosts, addPost, removePost, addComment, removeComment}

}