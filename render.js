const Renderer = function(){

    const appendPostDiv = id => $(`<div class='post' data-id='${id}'></div>`) //creating a div for the post

    const appendTextP = text => `<p class='post-text'>${text}</p>` //appending the post's text to the div

    const appendComments = (comments, $post) =>{ //appending comments to the given post with the comment id. each comments is a div with a delete button and a text
        for (let comment of comments){
           $post.append(`<div class='comments' data-id='${comment.id}'><button class='delete-comment'>X</button><p class='comment'>${comment.text}</p>`)
        } 
    }
    
    const appendCommentInpBtn = ($post) => { //appending a div that contains the input for comments and comment button.
        $commentdiv = $('<div class="comment-inpbtn"></div>')
        $commentdiv.append(`<input class='comment-input' placeholder='Write your comment here' onfocus="this.placeholder=''" onblur="this.placeholder='Write your comment here'">`)
        $commentdiv.append(`<button class="comment-btn">Comment</button>`)
        $post.append($commentdiv)
    } 

    const appendDeletePost = () => `<button class="delete">Delete post</button>` //appending the delete button.
        
    const renderPosts = function(posts){
        $('#posts').empty()
        
        for (let post of posts){

            const $post = appendPostDiv(post.id) 

            $post.append(appendTextP(post.text))

            appendComments(post.comments, $post) 

            appendCommentInpBtn($post)

            $post.append(appendDeletePost())

            $('#posts').append($post)

        }
    }

    return {renderPosts}
}