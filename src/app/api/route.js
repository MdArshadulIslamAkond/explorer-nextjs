export const GET = async (req, res) => {
    return Response.json({
        message: "Hello Server",
    })
};
export const POST = async (req, res) => {
    const newComment = await req.json();

    comments.push({
        id: comments.length + 1,
        comment: newComment.comment,
        timestamp: new Date().toISOString(),
    })
    return Response.json({
        message: "New comment added",
        comments
    });
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