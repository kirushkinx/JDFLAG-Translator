/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import definePlugin from "@utils/types";

import { ToggleChatBarIcon } from "./icon";

export const cl = classNameFactory("vc-trans-");
export var toggled: boolean = false;

export function setToggled(value: boolean) {
    toggled = value;
}

export function getToggled() {
    return toggled;
}

const ZAMENA: Record<string, string> = {
    'Л': 'L', 'Р': 'R', 'Д': 'D', 'В': 'V', 'Н': 'N',
    'С': 'S', 'З': 'Z', 'Ф': 'F',
    'л': 'L', 'р': 'R', 'д': 'D', 'в': 'V', 'н': 'N',
    'с': 'S', 'з': 'Z', 'ф': 'F'
};

export default definePlugin({
    name: "JDFLAG Translator",
    description: "ZАМЕNЯЕТ ТVОЮ ХУЙNЮ",
    authors: [{
        name: "wa1ne",
        id: 512645963727372290n
    }, {
        name: "kirushkinx",
        id: 696616239778234379n
    }],
    renderChatBarButton: ToggleChatBarIcon,

    start() {
    },

    async onBeforeMessageSend(_, message) {
        if (!message.content) {
            return;
        }
        if (!toggled) {
            return;
        }

        const upperContent = message.content.toUpperCase();
        const translated = upperContent
            .split('')
            .map(char => ZAMENA[char] ?? char)
            .join('');
        message.content = translated;
    }
});