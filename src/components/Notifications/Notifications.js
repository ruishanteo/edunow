import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissNotification } from "./NotificationStore";

// export interface Notification {
//   key: number;
//   message: string;
//   variant: NotificationVariant;
//   options: OptionsObject;
// }

// export type NotificationVariant = 'default' | 'error' | 'success' | 'warning' | 'info';

export const Notifications = () => {
  const [displayedKeys, setDisplayedKeys] = useState([]);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const dispatch = useDispatch();

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const removeOldKeys = (key) =>
      notifications.find((notification) => notification.key === key);
    const newDisplayKeys = displayedKeys.filter(removeOldKeys);
    let hasKeysChanged = newDisplayKeys.length !== displayedKeys.length;

    notifications.forEach((notification) => {
      console.log(notification);
      const key = enqueueSnackbar(notification.message, {
        variant: notification.variant,
        onClick: () => {
          closeSnackbar(key);
        },
        ...notification.options,
      });
      newDisplayKeys.push(notification.key);
      hasKeysChanged = true;
      dispatch(dismissNotification(notification.key));
    });

    if (hasKeysChanged) {
      setDisplayedKeys(newDisplayKeys);
    }
  }, [notifications, dispatch, displayedKeys, enqueueSnackbar, closeSnackbar]);

  return null;
};

export default Notifications;
