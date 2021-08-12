const Reviews = ({ id, title, text, authorName, authorTitle, topic, record }) => (
  <div className="p-4 md:w-1/2 w-full">
    <div className="h-full bg-gray-100 p-8 rounded">
      <span className="title-font font-medium text-gray-900">
        {title}
      </span>
      <br/>
      <span className="text-green-500 text-sm">
        {topic}
      </span>
      <span>&nbsp;&nbsp;&nbsp;</span>
      <span className="bg-purple-700 text-white text-xs">
        {record}
      </span>
      <br/><br/>
      <p className="leading-relaxed mb-6">
        {text}
      </p>
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-medium text-gray-900">
          {authorName}
        </span>
        <span className="text-gray-500 text-sm">{authorTitle}</span>
      </span>      
    </div>
  </div>
  );
  
  export default Reviews;
  