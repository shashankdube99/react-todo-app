const person = {
  name: "Shashank",
  address: {
    line1:"Ranisawargaon",
    city:"Gangakhed",
    country:"India"
  },
  profiles: ['twitter', 'linkedin', 'instagram'],
  printProfile: () => {
    person.profiles.map(
      (profile) => {
        console.log(profile)
      }
    )
  }

}

export default function LearningJavaScript() {
  return (
    <div>
    <div className="LearningJavaScript">{person.name}</div>
    <div className="LearningJavaScript">{person.address.line1}</div>
    <div className="LearningJavaScript">{person.address.city}</div>
    <div className="LearningJavaScript">{person.address.country}</div>
    <div className="LearningJavaScript">{person.profiles[0]}</div>
    <div className="LearningJavaScript">{person.printProfile()}</div>
    </div>
  )
}