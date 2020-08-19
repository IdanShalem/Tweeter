const Renderer = function(){

    const appendPostDiv = id => $(`<div class='post' data-id='${id}'></div>`)

    const appendTextP = text => `<p class='post-text'>${text}</p>`

    const appendComment = comment => `<p class='comments' data-id='${comment.id}'>${comment.text}</p>`
        
    const renderPosts = function(posts){
        $('#posts').empty()
        
        for (let post of posts){

            const $post = appendPostDiv(post.id)

            $post.append(appendTextP(post.text))

            for(let comment of post.comments){
                $post.append(appendComment(comment))
            }  

            $('#posts').append($post)

        }
    }

    return {renderPosts}
}