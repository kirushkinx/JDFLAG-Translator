/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { classes } from "@utils/misc";
import { useState } from "@webpack/common";

import { cl, getToggled, setToggled } from ".";

export function Icon({ height = 20, width = 20, className, toggled }: { height?: number; width?: number; className?: string; toggled?: boolean }) {
    return (
        <div
            style={{
                height: `${height}px`,
                width: `${width}px`,
                lineHeight: `${height}px`,
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
                color: toggled ? "green" : "var(--text-normal)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "1px"
            }}
            className={classes(cl("icon"), className)}
        >
            JD
        </div>
    );
}

export const ToggleChatBarIcon: ChatBarButtonFactory = ({ isMainChat }) => {
    if (!isMainChat) return null;

    const [toggled, setToggledState] = useState(getToggled());

    const toggle = () => {
        const newState = !toggled;
        setToggled(newState);
        setToggledState(newState);
    };

    return (
        <ChatBarButton
            tooltip={toggled ? "RАБОТАЕТ БLЯ" : "NЕ RАБОТАЕТ"}
            onClick={toggle}
            onContextMenu={toggle}
            buttonProps={{
                "aria-haspopup": "dialog"
            }}
        >
            <Icon className={cl({ "auto-translate": toggled, "chat-button": true })} toggled={toggled} />
        </ChatBarButton>
    );
};