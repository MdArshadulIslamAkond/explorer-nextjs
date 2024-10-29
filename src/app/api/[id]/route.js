export const PATCH = async (req, {params}) =>{
    const id = parseInt(params.id);
    const newComment = await req.json();
    // console.log(id);
    const comment = comments.find(comment => comment.id === id);
    // console.log(comment);
    if(comment){
        const index = comments.findIndex(comment => comment.id ===id);
        comments[index] = {...comment, ...newComment};
        return Response.json({
            message: "Comments updated",
            comments: comments,
        })
    }else{
        return Response.json({message: "Comment not found"})
    }
   
  
};

export const DELETE = async (req, {params}) =>{
    const id = parseInt(params.id);
    const comment = comments.find(comment => comment.id === id);
    if(comment){
        const index = comments.findIndex(comment => comment.id === id);
        comments.splice(index, 1);
        return Response.json({
            message: "Comment deleted",
            comments: comments,
        })
    }else{
        return Response.json({message: "Comment not found"})
    }
    // return {message: "Delete comment endpoint"}
};

const comments = [
    {
      "id": 1,
      "comment": "This is comment section",
      "timestamp": "2024-10-25T06:00:19.269Z"
    },
    {
      "id": 2,
      "comment": "This is testing purpose",
      "timestamp": "2024-10-25T06:00:48.589Z"
    }
  ];