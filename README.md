Github Markdown

Headings
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Font
*Italics*
_This will also be italic_
**Bold text**
__This will also be bold__
***Bold and Italics***
_You **can** combine them_
~~Striked Text~~
***~~Italic, bold, and strikethrough1~~***	

Unordered List 
* Item 1
* Item 2
  * Item 1a
  * Item 2a
     * Item 1b
     * Item 2b
   
Ordered List
1. First
2. jhg
   1. Second
   2. jhg
      1. Third
      2. jhg
     

Links
* [Link with more info with various formatting options](https://docs.github.com/en/github/writing-on-github "more info")
* https://www.google.com/
* <https://www.google.com/>

Link Label
[My GitHub][GitHubLink]

e.g. put on bottom: 

--------------------------------
[GitHubLink]:https://github.com/darsaveli

Links to URL in repository
[Example document](/example/example.md)

[example](./example)

Inserting images or gofs using links 
![alt](URL "title")
![Octocat](https://user-images.githubusercontent.com/81953271/124010886-b571ca80-d9df-11eb-86ac-b358c48ac6aa.png "Github logo") 

Resize Images or GIFS
<img src="https://github.com/darsaveli/Mariam/blob/main/1479814528_webarebears.gif" width="385px" align="center">

Linking image/gif
[![Octocat](https://user-images.githubusercontent.com/81953271/124010886-b571ca80-d9df-11eb-86ac-b358c48ac6aa.png "GitHub Logo")](https://github.com/)

Tables 
|Header1|Header2|Header3|
| --- | --- | --- |
| This | is a | table |
| This | is 2nd | row |
| This | is 3rd | row |

Align
| Align left | Centered  | Align right |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |

Checkbox
* [ ] Checkbox1

* [ ] Checkbox2

* [x] Checkbox selected

Quoting Text
> This is a block quoted text

Multiple Level blockquotes
> Asia
>> China
>>> Beijing
>>>> Haidian
>>>>> Tsinghua

Text Highlighting
`linux` `ubuntu`

Horizontal Line
***
___
--- 
<hr>

Visible markdown characters
*```git

Multi-line Text
aaa,
sss,
ddd!

asd,
sfd,
wer!

Comments in markdown
<!-- comment written in markdown -->

Emoji
:grinning:	or just place the emoji 😀

Code block
    `this` is an example of inline code.

four spaces work too!

public static void main(String[]args){} //Java

document.getElementById("myH1").innerHTML="Welcome to my Homepage"; //javascipt

Syntax Highlighting
```js
console.log('javascript')
```

```python
print('python')
```

```java
System.out.println('java')
```
   
```json
{
  "firstName": "A",
  "lastName": "B
  "age": 18
}
```
console.log('javascript')

print('python')

System.out.println('java')

{
  "firstName": "A",
  "lastName": "B",
  "age": 18
}

YAML
name: Mariam
located_in: ***
from: ***
education: ***
job: ***
company: ***

Inline expressions
This sentence uses `$` delimiters to show math inline:  $\sqrt{3x-1}+(1+x)^2$ 
    

