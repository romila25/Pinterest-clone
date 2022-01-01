import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';

export const sidebarItems = [
    { id: 1, icon: <MessageIcon />, text: "Thread" },
    { id: 2, icon: <InboxIcon />, text: "All DMs" },
    { id: 3, icon: <DraftsIcon />, text: "Mentions & Reactions" },
    { id: 4, icon: <BookmarkBorderIcon />, text: "Save Items" },
    { id: 5, icon: <GroupIcon />, text: "Peoples & Groups" },
    { id: 6, icon: <AppsIcon />, text: "More" }
]

export const channels = [{ name: "# Channel 1" }, { name: "# Channel 2" }]