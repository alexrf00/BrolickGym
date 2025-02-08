interface EnrollmentData {
  name: string;
  email: string;
  // Add any other fields you need
}
export const enrollUser = async (userDetails: EnrollmentData) => {
    console.log('Enrolling user:', userDetails);
  };
  