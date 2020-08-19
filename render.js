const Renderer = function(){

    const appendPostDiv = id => $(`<div class='post' data-id='${id}'></div>`)

    const appendTextP = text => `<p class='post-text'>${text}</p>`

    const appendComments = (comments, $post) =>{
        for (let comment of comments){
           $post.append(`<p class='comments' data-id='${comment.id}'>${comment.text}</p>`)
        } 
    }
        
    const renderPosts = function(posts){
        $('#posts').empty()
        
        for (let post of posts){

            const $post = appendPostDiv(post.id)

            $post.append(appendTextP(post.text))

            appendComments(post.comments, $post) 

            $('#posts').append($post)

        }
    }

    return {renderPosts}
}