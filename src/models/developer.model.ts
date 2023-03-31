import { Skill } from './skill.model';

export class Developer {
  lastname: string;
  firstname: string;
  age: number;
  gender: string;
  bio: string;
  skills: Skill[];

  constructor(
    lastnameParam: string,
    firstnameParam: string,
    ageParam: number,
    genderParam: string,
    bioParam: string,
    skillsParam: Skill[]
  ) {
    this.lastname = lastnameParam;
    this.firstname = firstnameParam;
    this.age = ageParam;
    this.gender = genderParam;
    this.bio = bioParam;
    this.skills = skillsParam;
  }
}
