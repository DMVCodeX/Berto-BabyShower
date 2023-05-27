export function Invitation() {
  return (
    <div>
      <h1>You are Invited to Anggie & Alberto&apos;s Baby Shower</h1>
      <img
        className="m-5"
        src="https://t3.ftcdn.net/jpg/05/27/83/70/360_F_527837080_j1jPNhyFFzNnElky9gtAfyPJI8Cu23m2.jpg"
        alt=""
      />
      <br />

      <h2>Save the Date:</h2>
      <h5>July 29th, 2023</h5>
      <h2>Location:</h2>
      <h5>Thomas Bull Memorial Park</h5>
      <h4>Address:</h4>
      <h5>211 State Route 416</h5>
      <h5>Montgomery, NY 12549</h5>
      <br />
      <h3>Memo:</h3>
      <h5>Near by Accommodations</h5>
      <a href="/accommodations">
        {" "}
        <img className="m-3" src="https://img.icons8.com/?size=512&id=10666&format=png" alt="" height="50" width="50" />
      </a>
    </div>
  );
}
