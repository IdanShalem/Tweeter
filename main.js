const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function(){ //adding posts
    const postText = $('#input').val()
    if(postText.length > 0){
        tweeter.addPost(postText)
        renderer.renderPosts(tweeter.getPosts())
        $('#input').val('')
    }
}

$('#posts').on('click', '.delete', function(){ //removing posts
    tweeter.removePost($(this).closest('.post').data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.comment-btn', function(){ //add comment to a post
    const commentText = $(this).closest('.comment-inpbtn').find('.comment-input').val()
    if(commentText.length > 0){
        tweeter.addComment(commentText, $(this).closest('.post').data().id)
        renderer.renderPosts(tweeter.getPosts())
        $(this).closest('.comment-inpbtn').find('.comment-input').val('')
    } 
})

$('#posts').on('click', '.delete-comment', function(){ //remove comments from a post
    tweeter.removeComment($(this).closest('.post').data().id, $(this).closest('.comments').data().id)
    renderer.renderPosts(tweeter.getPosts())
})