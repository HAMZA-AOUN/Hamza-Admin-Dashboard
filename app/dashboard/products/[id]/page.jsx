import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

import Image from "next/image";
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        <div className={styles.name}>Iphone</div>
      </div>
      <form className={styles.form}>
        <label>Title</label>
        <input type="text" name="title" placeholder="title" required />
        <label>Category</label>
        <select name="cat" id="cat">
          <option value="mobile">Mobile</option>
          <option value="laptop">Laptop</option>
          <option value="tap">Tap</option>
        </select>
        <label>Price</label>
        <input type="number" name="price" placeholder="price" required />
        <label>Stock</label>
        <input type="number" name="stock" placeholder="stock" />
        <label>Size</label>
        <input type="number" name="size" placeholder="size" />
        <label>Color</label>
        <input type="text" name="color" placeholder="color" />
        <label>Description</label>
        <textarea type="text" name="desc" placeholder="description" rows="6" />

        <button>Update</button>
      </form>
    </div>
  );
};

export default SingleUserPage;
