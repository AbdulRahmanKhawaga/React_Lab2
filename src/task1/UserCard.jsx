function UserCard({ user }) {
  const cardStyle = {
    width: '350px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%'
  };

  const iconStyle = {
    color: user.verified ? 'green' : 'red',
    fontWeight: 'bold',
    fontSize: '18px',
    marginLeft: '5px'
  };

  return (
    <div style={cardStyle}>
      <img src={user.picture} alt={user.name} style={imageStyle} />
      <div>
        <div><strong>{user.name}</strong></div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>
          Verified:
          <span style={iconStyle}>{user.verified ? '✔' : '✖'}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
