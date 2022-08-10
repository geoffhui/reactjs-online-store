exports.getUser = async (req, res) => {
   res.status(200).json({
      isLoggedIn: true,
      name: req.user.name,
      email: req.user.email,
      phone_number: req.user.phone_number,
      restock_notification: req.user.restock_notification,
      is_guest_account: req.user.is_guest_account,
      is_blocked: req.user.is_blocked
   })
}