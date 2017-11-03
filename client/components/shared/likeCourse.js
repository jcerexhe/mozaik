// uses browser localStorage to like a course for an anonymous user. Used on course tiles in several places

const likeCourse = function(name) {
  let storageExists = localStorage.getItem('likedCourses')
  if (storageExists !== null) {
    let storage = localStorage.getItem('likedCourses')
    storage = JSON.parse(storage)
    if (storage.includes(name)) {
      let i = storage.indexOf(name);
      if (i != -1) {
        storage.splice(i, 1);
      }
    } else {
      storage = storage.concat(name)
    }
    localStorage.setItem('likedCourses', JSON.stringify(storage))
  } else {
    var newArray = ['test'];
    newArray = newArray.concat(name)
    localStorage.setItem('likedCourses', JSON.stringify(newArray))
  }
}

export default likeCourse;
