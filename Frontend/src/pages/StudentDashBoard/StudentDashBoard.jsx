const StudentDashboard = () => {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold">Welcome, Student!</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">📅 Next Class</h2>
            <p>Mathematics with Mr. Smith</p>
            <p className="text-gray-500">Tomorrow at 10:00 AM</p>
          </div>
  
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">📢 Announcements</h2>
            <p>Exam schedule released. Check the updates.</p>
          </div>
  
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">📊 Progress Report</h2>
            <p>Grade: A</p>
            <p>Attendance: 95%</p>
          </div>
        </div>
      </div>
    );
  };
  export default StudentDashboard;
  