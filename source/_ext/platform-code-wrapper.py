from docutils import nodes
from docutils.parsers.rst import Directive


class PlatformCodeWrapper(Directive):

    has_content = True

    def run(self):
        self.assert_has_content()
        text = '\n'.join(self.content)
        node = nodes.container(text)
        node['classes'].append('platform-code')
        self.add_name(node)
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]

def setup(app):
    app.add_directive('platform-code',  PlatformCodeWrapper)

