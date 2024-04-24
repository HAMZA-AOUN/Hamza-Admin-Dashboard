import { addUser } from "../../../lib/actions";
import styles from "../../../ui/dashboard/users/addUser/addUser.module.css";
import UploadImg from "../../../ui/dashboard/upload/UploadImg";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" name="username" placeholder="username" required />

        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="phone" name="phone" placeholder="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>is Admin?</option>
          <option value={false}>Yes</option>
          <option value={true}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true}>is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <UploadImg />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
