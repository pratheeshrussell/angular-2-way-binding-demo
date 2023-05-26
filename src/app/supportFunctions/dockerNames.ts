import {Left,Right} from './nameConstants';

export default class DockerNames{
    static generateName():string{
        var first = Left[Math.floor((Math.random() * Left.length))];
        var second = Right[Math.floor((Math.random() * Right.length))];
        var result = first + "_" + second;
        /* Steve Wozniak is not boring. This is part of the docker names spec. */
        if (result === "boring_wozniak") {
            return DockerNames.generateName();
        }
        return result;
    }
}