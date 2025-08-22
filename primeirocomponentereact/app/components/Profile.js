export function Profile() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md flex flex-col items-center space-y-4">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQHcdFFHuDuI8g/profile-displayphoto-scale_200_200/B4DZhgR8HtHsAY-/0/1753961974276?e=2147483647&v=beta&t=UwcvbgnYJqNxa_3K1MRbExSaiwN0WvJQtgraLzs9VGw"
        alt="Dayvson Moura"
        className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-sm"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">Dayvson Moura</h2>
        <p className="text-sm text-gray-600 mt-1">
          Estudante de tecnologia, desenvolvimento de sistemas e afins. Cursa Sistemas para Internet na UNICAP.
        </p>
      </div>
    </div>
  );
}
