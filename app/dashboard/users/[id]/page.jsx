import { updateUser } from "../../../lib/actions";
import { fetchUser } from "../../../lib/data";
import UploadImg from "../../../ui/dashboard/upload/UploadImg";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = async ({ params }) => {
  const { id } = params;

  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <form action={updateUser} className={styles.form}>
        <input type="hidden" value={id} name="id" />
        <input type="text" name="username" placeholder={user.username} />

        <input type="email" name="email" placeholder={user.email} />
        <input type="password" name="password" placeholder="password" />
        <input type="phone" name="phone" placeholder={user.phone} />
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
        <UploadImg image={user.img.toString()} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
